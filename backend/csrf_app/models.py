from django.db import models
from django.contrib.auth.models import User

class Notes(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notes', null=True, default=None)

    def __str__(self):
        return f'{self.title}'
