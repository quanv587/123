$(function(){
    var topH=$(window).height();
    var num=0;
    var flag=true;
    $("#fullpage").mousedown(function (e) {
        e.preventDefault();
    })
    $("#fullpage").mousemove(function (e) {
        e.preventDefault();
    })
    touch.on("body","swipeup","#fullpage",function(e){
        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;
        }
        flag=false;
        $(".btn").eq(num).addClass("btnn").siblings().removeClass("btnn");
        $("#fullpage").css({
            marginTop:-num*topH,
            transition:"margin-top 1s ease"
        })
        //console.log(num);
        e.preventDefault();
    })
    touch.on("body","swipedown","#fullpage",function(e){
        num--;
        if(!flag){
            return;
        }
        if(num==-1){
            num=0;
            return;
        }
        flag=false;
        $("#fullpage").css({
            marginTop:-num*topH,
            transition:"margin-top 1s ease"
        })
        $(".btn").eq(num).addClass("btnn").siblings().removeClass("btnn");
        e.preventDefault();
    })
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
        $("section").each(function(index,obj){
            if(index==num){
                $(obj).find(".center .cen-zi").css({
                    animation:"zimove 1s ease"
                })
                $(obj).find("section .center .dl").css({
                    animation:"imgmove 1s ease"
                })
            }else{
                $(obj).find(".center .cen-zi").css({
                    animation:"zimove 1s ease"
                })
                $(obj).find("section .center .dl").css({
                    animation:"imgmove 1s ease"
                })
            }
        })
    })

    //头小屏动画
    var flag2=true;
    $(".menu-option").click(function(){
        if(flag2){
            $(this).find(".menu-option-top").css({
                transform:"translate(0,5px) rotateZ(45deg)"
            })
            $(this).find(".menu-option-bot").css({
                transform:"translate(0,-5px) rotateZ(-45deg)"
            })
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    transform:"rotateX(0deg)",
                    opacity:0,animation:"nav 1s linear forwards "+index*0.2+"s"
                })
            })
            $(".sceen").css({
                    display:"block"
            })
            flag2=false;
        }else{
            $(this).find(".menu-option-top").css({
                transform:"translate(0,0) rotateZ(0deg)"
            })
            $(this).find(".menu-option-bot").css({
                transform:"translate(0,0) rotateZ(0deg)"
            })
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    transform:"rotateX(0deg)",
                    opacity:1,animation:"nav1 1s linear forwards "+(1.4-index*0.2)+"s"
                })
            })
            flag2=true;
        }

    })
    //
    $(window).resize(function(){
        topH=$(window).height();
        var clientW=$(window).width();
        $("#fullpage").css("marginTop",topH*-num)
        if(clientW>1000){
            $(".menu a").css({
                animation:"none",
                opacity:0,
                transform:"rotateX(90deg)"
            })
            $(".menu-option-top,.menu-option-bot").css({

            })
            flag2=true;

        }
    })
    //
    $(".btn li").click(function(){
        var index=$(this).index();
        $(this).addClass('btnn').siblings().removeClass('btnn');
        $("section").eq(index).addClass('out').siblings().removeClass('out')
        $("#fullpage").css({
            marginTop:-index*topH,
            transition:"margin-top 1s ease"
        })
    })

})