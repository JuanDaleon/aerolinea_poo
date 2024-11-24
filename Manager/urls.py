#urls 
from django.urls import path, include
from rest_framework import routers
from Manager import views


router = routers.DefaultRouter()
router.register(r'flights', views.Flight_viewset, basename= 'flight_manager')
router.register(r'users', views.User_viewSet, basename= 'user_manager')
router.register(r'bookings', views.Booking_viewSet, basename= 'booking_manager')




urlpatterns = [
    path('api/manager/', include(router.urls)),
    
]