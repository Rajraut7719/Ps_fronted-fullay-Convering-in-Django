from django.shortcuts import render

# Create your views here.
def dashboard(request):
    return render(request,'app/dashboard.html')

def index(request):
    return render(request,'app/index.html')

def Customer_List(request):
    return render(request,'app/customer/Customer_List.html')

def Customer_Edit(request):
    return render(request,'app/customer/Customer_Edit.html')

def Customer_Create(request):
    return render(request,'app/customer/Customer_Create.html')

def Item_List(request):
    return render(request,'app/Item_List.html')

def Supplier_List(request):
    return render(request,'app/supplier/Supplier_List.html')

def puchaseOrder_List(request):
    return render(request,'app/purchase/puchaseOrder_List.html')

def PurchaseRequest_List(request):
    return render(request,'app/purchase/PurchaseRequest_List.html')

def PurchaseOrder_Create(request):
    return render(request,'app/purchase/PurchaseOrder_Create.html')

def purchaseOrder_Edit(request):
    return render(request,'app/purchase/purchaseOrder_Edit.html')


def Supplier_Edit(request):
    return render(request,'app/supplier/Supplier_Edit.html')


def Supplier_Create(request):
    return render(request,'app/supplier/Supplier_Create.html')

def Supplier_Detail(request):
    return render(request,'app/supplier/Supplier_Detail.html')

