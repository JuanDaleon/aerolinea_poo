from django.urls import path
from .views import ReservasManager

urlpatterns = [
    path('api/reservas/', ReservasManager.as_view(), name='reserva-list'),
    path('api/reservas/<int:reserva_id>/', ReservasManager.as_view(), name='reserva-detail'),
]