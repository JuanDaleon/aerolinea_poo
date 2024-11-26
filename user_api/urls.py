from django.urls import path
from .views import UserManager

urlpatterns = [
    path('api/users/', UserManager.as_view(), name='user-list'),
    path('api/users/<int:user_id>/', UserManager.as_view(), name='user-detail'),
]