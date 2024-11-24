from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Flight, User, Booking
from .serializers import Flight_serializer, User_serializer, Booking_serializer

# Create your views here.

class Flight_viewset(ModelViewSet):
    queryset = Flight.objects.all()
    serializer_class = Flight_serializer
    
    
    
class Booking_viewSet(ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = Booking_serializer
    
class User_viewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = User_serializer
 