from django.contrib import admin
from .models import Group
from .models import Profile

admin.site.register(Group)
admin.site.register(Profile)