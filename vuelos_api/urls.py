from django.urls import path
from .views import VuelosManager

urlpatterns = [
    path('api/vuelos/', VuelosManager.as_view(), name='vuelo-list'),
    path('api/vuelos/<int:vuelo_id>/', VuelosManager.as_view(), name='vuelo-detail'),
]