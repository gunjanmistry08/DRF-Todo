from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializer import TaskSerializers
from .models import Task

# Create your views here.
@api_view(['GET'])
def apiOverView(request):

    api_urls = {
        "list":"/task-list/",
        "detail":"/task-detail/<str:pk>",
        "create":"/task-create/",
        "update":"/task-update/<str:pk>",
        "delete":"/task-delete/<str:pk>",
    }
    return Response(api_urls)

@api_view(['GET'])
def taskList(request):
    tasks = Task.objects.all()
    serializer = TaskSerializers(tasks, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def taskDetail(request,pk):
    task = Task.objects.get(id=pk)
    serializer = TaskSerializers(task, many=True)
    return Response(serializer.data)

@api_view(['Delete'])
def taskDelete(request,pk):
    task = Task.objects.get(id=pk)
    task.delete()
    return Response("deleted")

@api_view(['POST'])
def taskUpdate(request,pk):
    task = Task.objects.get(id=pk)
    serializer = TaskSerializers(instance=task,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def taskCreate(request):
    serializer = TaskSerializers(data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)