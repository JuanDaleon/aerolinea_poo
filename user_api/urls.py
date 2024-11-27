from django.urls import path
from .views import UserManager, LoginManager, RegisterManager

urlpatterns = [
    path('api/users/', UserManager.as_view(), name='user-list'),
    path('api/users/<int:user_id>/', UserManager.as_view(), name='user-detail'),
    path('api/users/register/', RegisterManager.as_view(), name='user-register'),
    path('api/users/login/', LoginManager.as_view(), name='user-login'),
]