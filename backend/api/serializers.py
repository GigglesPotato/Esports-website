from rest_framework import serializers
from .models import Game, College, Team, StudentProfile, RecruiterProfile, Message
from django.contrib.auth.models import User


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = "__all__"


class CollegeSerializer(serializers.ModelSerializer):
    class Meta:
        model = College
        fields = "__all__"


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = "__all__"


class StudentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentProfile
        fields = "__all__"


class RecruiterProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecruiterProfile
        fields = "__all__"


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = "__all__"


""" I chose not to use all for users since it could have sensitve information I don't want to be exposed. """


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email"]
