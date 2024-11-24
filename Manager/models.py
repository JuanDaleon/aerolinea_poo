from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


# Create your models here.
#!----------------------------------
    #gestores personalizados
#!----------------------------------

#clase de gestor de vuelos
class Flight_manager(models.Manager):
    def available_flights(self):
        """Devuelve vuelos con asientos disponibles."""
        return self.filter(seats__gt=0)

    def flights_by_destination(self, destination):
        """Filtra vuelos por destino."""
        return self.filter(destination=destination)
    
    
#clase de gestor de usuarios 
class User_manager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        """Crea y devuelve un usuario estándar."""
        if not email:
            raise ValueError("El email es obligatorio")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """Crea y devuelve un superusuario."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)
    
    
#clase de gestor de reservas 
class BookingManager(models.Manager):
    def active_bookings(self):
        """Devuelve reservas activas."""
        return self.filter(status='active')

    def bookings_by_user(self, user):
        """Filtra reservas por usuario."""
        return self.filter(user=user)


#!-----------------------------
    #modelos 
#!-----------------------------

class Flight(models.Model):
    code = models.CharField(max_length=10)  
    origin = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    departure_time = models.DateTimeField()
    seats = models.IntegerField() 
    
    objects = Flight_manager()
    
    def __str__(self):
        return f"Flight {self.code} from {self.origin} to {self.destination}"
    
class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    objects = User_manager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']
    
    def __str__(self):
        return self.email



class Booking(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('cancelled', 'Cancelled'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    objects = BookingManager()

    def __str__(self):
        return f"reserva por {self.user.email} para el vuelo {self.flight.code} - {self.status}"
    