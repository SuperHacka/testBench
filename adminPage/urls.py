from django.urls import path
from adminPage import views
from . import views

urlpatterns = [
    path("adminTable", views.adminTable, name="adminTable"),
    path("adminTable/<str:pk>/", views.updateAdmin, name="adminTable"),
    path("testTable", views.testTable, name="testTable"),
    
]