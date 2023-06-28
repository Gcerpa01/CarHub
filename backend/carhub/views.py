from django.http import JsonResponse
from .models import Group
from .models import Message
from .models import Profile
from .serializers import GroupSerializer
from .serializers import ProfileSerializer
from .serializers import MessageSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Group calls

@api_view(['GET','POST'])
def group_list(request,format=None):
    if request.method == 'GET':
        list_of_groups = Group.objects.all()
        serializer = GroupSerializer(list_of_groups,many=True)
        return Response({"groups": serializer.data})
    
    if request.method == 'POST':
        serializer = GroupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)

@api_view(['GET','PUT', 'DELETE'])      
def group_detail(request,id,format=None):
   
    try:
        group = Group.objects.get(pk = id)
    except Group.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = GroupSerializer(group)
        return Response({"groups": serializer.data})

    elif request.method == 'PUT':
        serializer = GroupSerializer(group,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.error,status=status.HTTP_404_NOT_FOUND)
        
    elif request.method == 'DELETE':
        group.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        

# Profile calls

@api_view(['GET', 'POST'])
def profile_list(request, format=None):
    if request.method == 'GET':
        profiles = Profile.objects.all()
        serializer = ProfileSerializer(profiles, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print("not valid")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])      
def profile_detail(request, id, format=None):
    try:
        profile = Profile.objects.get(pk=id)
    except Profile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    elif request.method == 'DELETE':
        profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    





# Message calls
@api_view(['GET','POST'])
def message_list(request,format=None):
    if request.method == 'GET':
        list_of_groups = Message.objects.all()
        serializer = MessageSerializer(list_of_groups,many=True)
        return Response({"messages": serializer.data})
    
    if request.method == 'POST':
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)

@api_view(['GET','PUT', 'DELETE'])      
def message_detail(request,id,format=None):
   
    try:
        message = Message.objects.get(pk = id)
    except Message.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = MessageSerializer(message)
        return Response({"groups": serializer.data})

    elif request.method == 'PUT':
        serializer = MessageSerializer(message,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.error,status=status.HTTP_404_NOT_FOUND)
        
    elif request.method == 'DELETE':
        message.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)