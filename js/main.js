let btn=document.querySelector(".btn")
let title=document.querySelector(".title")
let link=document.querySelector(".link")
let counter=1

btn.addEventListener('click',()=>{
    if(counter==1){
        btn.innerText = " قعدت افكر ايه هيبهر مجدي قولت مجدي فرفوش وبيحب الكلام الرايق ,دوس تاني يعم دوس";
        counter++;
    }
    else if(counter==2){
        btn.innerText="المهم عشان مش عاوز اطول عليك هتروق معايا يعم والله دوس الاخيره"
    counter++
    }
    else if(counter==3){
        btn.innerText='خش هتجيبك,مع تحياتي ياسر توفيق'
        link.style.display="inline"
    }
    
})

let info=document.querySelector('.land-info')
let yes=document.querySelector('.yes')
let no=document.querySelector('.no')
let img=document.querySelector('.img')
let myimg=document.querySelector('.myimg')
let landtitle=document.querySelector('.land-title')
let en=document.querySelector('.en')
let final=document.querySelector('.final')
let by=document.querySelector('.by')

no.addEventListener('click',()=>{
    img.classList.remove('active');
    myimg.classList.add('active');
    en.classList.remove('active');
    landtitle.innerText="ده انت القمر يحبيب اخووك"
})
yes.addEventListener('click',()=>{
    img.classList.add('active');
    myimg.classList.remove('active');
    en.classList.add('active');
    landtitle.innerText="اكيد شوفتني انا"

})
en.addEventListener('click',()=>{
    info.style.display='none'
    en.style.display='none'
    final.classList.remove('active');
    by.classList.remove('active');
})

let inputcalc=document.querySelector('.input-calc')
let inputres=document.querySelector('.input-res')

inputcalc.addEventListener("keyup",myresult);
// inputres.value= inputcalc.value
function myresult(){
    inputres.value= inputcalc.value * 1745.21;
}

by.addEventListener('click',()=>{
    final.classList.add('active');
    by.innerText="وانا والله كمان حزين ,قولي بق الي بعد كده وياريت تكون انبرهت ياستاذ مجدي"
})









