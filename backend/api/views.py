"""
views.py
Description: All viewsets for my models with the serializers.
Written by: Noah Leeper
Created on: 04/17/2025
Last Updated on: 04/18/2025
"""
# backend/app/views.py

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Game, College, Team, StudentProfile, RecruiterProfile, Message
from .serializers import (
    UserSerializer,
    GameSerializer,
    CollegeSerializer,
    TeamSerializer,
    StudentProfileSerializer,
    RecruiterProfileSerializer,
    MessageSerializer,
)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=False, methods=["post"])
    def login_or_create(self, request):
        """POST { "username": "noah" } → returns user.id & username."""
        uname = request.data.get("username")
        if not uname:
            return Response(
                {"error": "username required"}, status=status.HTTP_400_BAD_REQUEST
            )
        user, created = User.objects.get_or_create(username=uname)
        return Response(UserSerializer(user).data)


class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer


class CollegeViewSet(viewsets.ModelViewSet):
    queryset = College.objects.prefetch_related("games").all()
    serializer_class = CollegeSerializer


class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class StudentProfileViewSet(viewsets.ModelViewSet):
    queryset = StudentProfile.objects.all()
    serializer_class = StudentProfileSerializer


class RecruiterProfileViewSet(viewsets.ModelViewSet):
    queryset = RecruiterProfile.objects.select_related("user").all()
    serializer_class = RecruiterProfileSerializer


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all().order_by("-sent_at")
    serializer_class = MessageSerializer
