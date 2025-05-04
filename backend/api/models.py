"""
models.py
Description: This is the model for my esports website backend
Written by: Noah Leeper
Created on: 04/17/2025
Last Updated on: 04/18/2025
"""

from django.db import models
from django.contrib.auth.models import User


class Game(models.Model):
    """Represents a competitive game (i.e. Valorant) students and colleges are involved in or want to be involved in."""

    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class College(models.Model):
    """Represents a college that has an esports team or is creating one. Colleges without any esports interest won't exist.
    Many Colleges can have the same games and also have many teams."""

    name = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    programs = models.TextField(blank=True, null=True)

    games = models.ManyToManyField(Game, through="Team", related_name="colleges")

    def __str__(self):
        return self.name


class Team(models.Model):
    """Links a college to a game with specific team details like rank and coach info.
    A team may only have one college but a college may have many teams."""

    college = models.ForeignKey(College, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    team_name = models.CharField(max_length=100, blank=True, null=True)
    rank = models.CharField(max_length=50)
    coach_name = models.CharField(max_length=100)
    coach_email = models.EmailField()
    coach_phone = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        unique_together = ("college", "game", "team_name")

    def __str__(self):
        return f"{self.college.name} – {self.game.name} ({self.team_name or 'Team'})"


class StudentProfile(models.Model):
    """Stores profile details for high school esports students seeking college connections."""

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    gpa = models.DecimalField(max_digits=4, decimal_places=2)
    games = models.ManyToManyField(Game, related_name="students")
    planned_year = models.PositiveIntegerField()
    experience = models.TextField(blank=True, null=True)
    hometown = models.CharField(max_length=100)
    high_school = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.user.get_full_name() or self.user.username}"


class RecruiterProfile(models.Model):
    """Represents a recruiter or coach at a college responsible for esports recruitment."""

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    college = models.ForeignKey(College, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=True, null=True)
    contact_email = models.EmailField()
    contact_phone = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return f"{self.user.get_full_name()} @ {self.college.name}"


class Message(models.Model):
    """A direct message sent between users (students or recruiters) within the platform."""

    sender = models.ForeignKey(
        User, related_name="sent_messages", on_delete=models.CASCADE
    )
    recipient = models.ForeignKey(
        User, related_name="received_messages", on_delete=models.CASCADE
    )
    body = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)
    read = models.BooleanField(default=False)

    class Meta:
        ordering = ["-sent_at"]

    def __str__(self):
        return f"From {self.sender} to {self.recipient} @ {self.sent_at:%Y-%m-%d %H:%M}"
