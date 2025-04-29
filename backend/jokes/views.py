import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Joke

@api_view(['GET'])
def get_random_joke(request):
    try:
        # Fetch from public API
        response = requests.get('https://official-joke-api.appspot.com/random_joke')
        response.raise_for_status()
        joke_data = response.json()
        
        # Optional: Save to database
        joke, created = Joke.objects.get_or_create(
            setup=joke_data['setup'],
            punchline=joke_data['punchline'],
            defaults={
                'category': joke_data.get('type', 'general'),
                'api_id': joke_data.get('id')
            }
        )
        
        return Response(joke_data)
    except requests.exceptions.RequestException as e:
        return Response(
            {'error': 'Failed to fetch joke from external API'},
            status=status.HTTP_503_SERVICE_UNAVAILABLE
        )
    except Exception as e:
        return Response(
            {'error': 'An unexpected error occurred'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )