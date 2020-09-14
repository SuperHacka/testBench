from django.shortcuts import render
from django.views import generic

class IndexView(generic.TemplateView):
    """
    IndexView:
    """
    module = 'indexView'
    template_name = 'site/index.html'
# Create your views here.

def base(request):
    return render(request, 'site/base.html')
