from rest_framework import viewsets
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


class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer


class CollegeViewSet(viewsets.ModelViewSet):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer


class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class StudentProfileViewSet(viewsets.ModelViewSet):
    queryset = StudentProfile.objects.all()
    serializer_class = StudentProfileSerializer


class RecruiterProfileViewSet(viewsets.ModelViewSet):
    queryset = RecruiterProfile.objects.all()
    serializer_class = RecruiterProfileSerializer


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
