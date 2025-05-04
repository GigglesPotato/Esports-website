"""
admin.py
Description: all admin registers for the models
Written by: Noah Leeper
Created on: 04/17/2025
Last Updated on: 04/18/2025
"""

from django.contrib import admin
from .models import Game, College, Team, StudentProfile, RecruiterProfile, Message


@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(College)
class CollegeAdmin(admin.ModelAdmin):
    list_display = ("name", "location")
    search_fields = ("name", "location")


@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ("college", "game", "team_name", "rank")
    search_fields = ("college__name", "game__name", "team_name")


@admin.register(StudentProfile)
class StudentProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "gpa", "planned_year", "hometown", "high_school")
    search_fields = ("user__username", "high_school", "hometown")


@admin.register(RecruiterProfile)
class RecruiterProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "college", "title")
    search_fields = ("user__username", "college__name", "title")


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ("sender", "recipient", "sent_at", "read")
    search_fields = ("sender__username", "recipient__username", "body")
    list_filter = ("read", "sent_at")
