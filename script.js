$(function(){
    
    var $mainMenuItems = $("#main-menu ul").children("li"),
    totalMainMenuItems = $mainMenuItems.length,
    openedIndex = 2,
        
    init = function(){
        bindEvents();
        
        if(valideIndex(openedIndex))
            {
                //var $item = $mainMenuItems.eq(openedIndex);
                //animateItem($item, true, 250); //soit comme ça, soit comme suit :
                animateItem($mainMenuItems.eq(openedIndex),true, 700)
            }
        
    },
    
        bindEvents = function(){
            
         $mainMenuItems.children(".images").click(function(){
            var $newIndex = $(this).parent().index();
                checkAndAnimateItem($newIndex);
            });
        $(".button").hover(function(){
            $(this).addClass("hovered");
        },
        function(){
            $(this).removeClass("hovered"); 
        });
           
            
        $(".button").click(function(){
            var $newIndex = $(this).index();
            checkAndAnimateItem($newIndex);
        });
            
        
        },
    
    valideIndex = function(indexToCheck){
        
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    },
    
    animateItem = function($item, toOpen, speed){
        
        var $colorImage = $item.find(".color"),
        itemPram = toOpen ? {width:"420px"} : {width:"140px"},
        imageColorParam = toOpen ? {left:"0px"}: {left:"140px"};
        $colorImage.animate(imageColorParam,speed);
        $item.animate(itemPram,speed);
    },
        
    checkAndAnimateItem = function(indexToCheckAndAnimate){
        if (openedIndex === indexToCheckAndAnimate)
                {
                    animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
                    openedIndex = -1;
                }
            else {
                
                if(valideIndex(indexToCheckAndAnimate))
                    {
                    animateItem($mainMenuItems.eq(openedIndex), false, 250);
                    openedIndex = indexToCheckAndAnimate;
                    animateItem($mainMenuItems.eq(openedIndex), true, 250);
                    }
                }   

    };  
    
    init();
    
    
});