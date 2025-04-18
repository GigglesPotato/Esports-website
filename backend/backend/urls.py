from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import (
    UserViewSet,
    GameViewSet,
    CollegeViewSet,
    TeamViewSet,
    StudentProfileViewSet,
    RecruiterProfileViewSet,
    MessageViewSet,
)

router = DefaultRouter()
router.register(r"users", UserViewSet)
router.register(r"games", GameViewSet)
router.register(r"colleges", CollegeViewSet)
router.register(r"teams", TeamViewSet)
router.register(r"students", StudentProfileViewSet)
router.register(r"recruiters", RecruiterProfileViewSet)
router.register(r"messages", MessageViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
]
