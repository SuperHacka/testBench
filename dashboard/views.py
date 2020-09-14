from django.shortcuts import render
from django.views import generic

class IndexView(generic.TemplateView):
    """
    IndexView:
    """
    module = 'indexView'
    template_name = 'index.html'



def base(request):
    return render(request, 'base.html')

def navbar(request):
    return render(request, 'Navbar.html')
