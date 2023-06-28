from django.contrib import admin
from .models import Group
from .models import Profile
from .models import Message

admin.site.register(Group)
admin.site.register(Profile)
admin.site.register(Message)