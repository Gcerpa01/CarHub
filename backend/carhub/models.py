from django.db import models

class Group(models.Model):
    name = models.CharField(max_length = 200)
    members = models.IntegerField()
    description  = models.CharField(max_length=500)
    joined = models.BooleanField()
    image = models.URLField(max_length=200)

    def __str__ (self):
        return self.name
    
