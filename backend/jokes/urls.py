from django.urls import path
from .views import get_random_joke

urlpatterns = [
    path('api/joke/', get_random_joke, name='random-joke'),
]