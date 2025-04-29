from django.db import models

class Joke(models.Model):
    setup = models.TextField()
    punchline = models.TextField()
    category = models.CharField(max_length=50, blank=True)
    api_id = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.setup} - {self.punchline}"