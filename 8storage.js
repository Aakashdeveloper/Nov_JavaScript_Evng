localStorage
/// Presistent Storage
> data is always present in browser after saving once
> can be access through any tab 
> we have to remove it manually 

localStorage.setItem('token','345f45t')
undefined
localStorage.getItem('token')
"345f45t"
localStorage.setItem('token','mytoken')
undefined
localStorage.getItem('token')
null
localStorage.removeItem('token')


sessionStorage
> save wrt to tab
> remove automatically as soon as tab close

sessionStorage.setItem("_ltk",'76b7fg6y')
sessionStorage.setItem("_ltk",'76b7fg6y')
undefined
sessionStorage.getItem('_ltk')
"76b7fg6y"
sessionStorage.removeItem('_ltk')
undefined
sessionStorage.getItem('_ltk')
null
sessionStorage.setItem("_ltk",'76b7fg6y')



cookies
> save wrt to website
> can save  and remove automatically with specified time
> in same browser its is always available wrt to website

document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.1226284630.1604584925; _gat_gtag_UA_131256843_1=1"
document.cookie = "lat=41.34"
"lat=41.34"
document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.1226284630.1604584925; lat=41.34"

document.cookie="place=delhi;expires=Sat, 07 Nov 2020 01:00:00 UTC"