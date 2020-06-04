angular.module("myApp", []).controller("MainController", ["$scope", "$timeout", "$filter", function ($scope, $timeout, $filter) {

    var vm = this;

    vm.findBeer = findBeer;
    vm.isBeer = isBeer;

    vm.beer = {};

    const color = {
        "white": "jasna",
        "black": "ciemna",
        "brown": "brązowa"
    }
    const alcohol = {
        "weak": "słaby",
        "medium": "średni",
        "high": "wysoki"
    }
    const gall = {
        "weak": "słaba",
        "medium": "średnia",
        "high": "wysoka"
    }
    const taste = {
        "sweet": "słodowy",
        "biternes": "chmielowy",
        "citrus": "cytrusowy",
        "bread": "chlebowy",
        "banana": "bananowy",
        "coffee": "kawowy",
        "chocolate": "czekoladowy",
        "fruit": "owocowy",
        "dried": "suszony owoc",
        "smoked": "wędzony",
        "sour": "kwaśny"

    }
    
    vm.formData = {}

    beers = [{
            "img": "img/apa1.png",
            "name": "a ja pale ale (APA) ",
            "color": "white",
            "alcohol": "medium",
            "gall": "medium",
            "taste": "citrus",
            "taste2": "biternes"
        },
        {
            "img": "img/apa2.png",
            "name": "Grodziska APA",
            "color": "white",
            "alcohol": "medium",
            "gall": "medium",
            "taste": "biternes",
            "taste2": "citrus"
        },
        {
            "img": "img/lager1.png",
            "name": " Miłosław Niefiltrowane (lager)",
            "color": "white",
            "alcohol": "medium",
            "gall": "medium",
            "taste": "sweet",
            "taste2": "biternes"
        },
        {
            "img": "img/lager2.png",
            "name": "Kormoran Świeże (lager)",
            "color": "white",
            "alcohol": "medium",
            "gall": "medium",
            "taste": "biternes",
            "taste2": "sweet",
        },
        {
            "img": "img/ipa1.png",
            "name": "Pinta - Atak Chmielu (IPA)",
            "color": "white",
            "alcohol": "medium",
            "gall": "high",
            "taste": "citrus",
            "taste2": "biternes"
        },
        {
            "img": "img/ipa2.png",
            "name": "AleBrowar - Rowing Jack (IPA)",
            "color": "white",
            "alcohol": "medium",
            "gall": "high",
            "taste": "biternes",
            "taste2": "citrus"
        },
        {
            "img": "img/kozlak1.png",
            "name": "Amber Koźlak",
            "color": "brown",
            "alcohol": "high",
            "gall": "weak",
            "taste": "bread",
            "taste2": "sweet"

        },
        {
            "img": "img/kozlak2.png",
            "name": "Miłosław Koźlak",
            "color": "brown",
            "alcohol": "high",
            "gall": "weak",
            "taste": "sweet",
            "taste2": "bread"

        },
        {
            "img": "img/weizen1.png",
            "name": "Primator Weizen",
            "color": "white",
            "alcohol": "medium",
            "gall": "weak",
            "taste": "sweet",
            "taste2": "banana"
        },
        {
            "img": "img/weizen2.png",
            "name": "Amber Pszeniczne (weizen)",
            "color": "white",
            "alcohol": "medium",
            "gall": "weak",
            "taste": "banana",
            "taste2": "sweet"
        },
        {
            "img": "img/stout1.png",
            "name": "Guinness (stout)",
            "color": "black",
            "alcohol": "weak",
            "gall": "medium",
            "taste": "coffee",
            "taste2": "chocolate"
        },
        {
            "img": "img/stout2.png",
            "name": "Cieszyn Stout",
            "color": "black",
            "alcohol": "weak",
            "gall": "medium",
            "taste": "chocolate",
            "taste2": "coffee"
        },
        {
            "img": "img/fruitale1.png",
            "name": "bezalkoholowe Mango ALE (FruitAle)",
            "color": "white",
            "alcohol": "weak",
            "gall": "weak",
            "taste": "fruit",
            "taste2": "citrus"
        },
        {
            "img": "img/fruitale2.png",
            "name": "EL FRUTO (FruitAle)",
            "color": "white",
            "alcohol": "high",
            "gall": "weak",
            "taste": "fruit",
            "taste2": "citrus"
        },
        {
            "img": "img/porter1.png",
            "name": "Komes Porter Bałtycki",
            "color": "black",
            "alcohol": "high",
            "gall": "medium",
            "taste": "dried",
            "taste2": "chocolate"
        },
        {
            "img": "img/porter2.png",
            "name": "Okocim Porter Bałtycki",
            "color": "black",
            "alcohol": "high",
            "gall": "medium",
            "taste": "chocolate",
            "taste2": "dried"
        },
        {
            "img": "img/grodziskie1.png",
            "name": "Browar Grodzisk - Piwo z Grodziska",
            "color": "white",
            "alcohol": "weak",
            "gall": "medium",
            "taste": "smoked",
            "taste2": "biternes"
        },
        {
            "img": "img/grodziskie2.png",
            "name": "A La Grodziskie",
            "color": "white",
            "alcohol": "weak",
            "gall": "medium",
            "taste": "biternes",
            "taste2": "smoked"
        },
        {
            "img": "img/gose1.png",
            "name": "Let’s Cook Mango (gose)",
            "color": "white",
            "alcohol": "weak",
            "gall": "weak",
            "taste": "sour",
            "taste2": "fruit"
        },
        {
            "img": "img/gose2.png",
            "name": "Let’s Cook Mango PassionFriut (gose)",
            "color": "white",
            "alcohol": "weak",
            "gall": "weak",
            "taste": "fruit",
            "taste2": "sour"
        },
        {
            "img": "img/barleywine1.png",
            "name": "Komes Barley Wine (barleywine)",
            "color": "brown",
            "alcohol": "high",
            "gall": "medium",
            "taste": "sweet",
            "taste2": "fruit"
        },
        {
            "img": "img/barleywine2.png",
            "name": "Kormoran Barlow Sorbus (barleywine)",
            "color": "brown",
            "alcohol": "high",
            "gall": "medium",
            "taste": "fruit",
            "taste2": "sweet"
        },
        {
            "img": "img/lambic1.png",
            "name": "Boon (lambic)",
            "color": "white",
            "alcohol": "medium",
            "gall": "weak",
            "taste": "sour",
            "taste2": "fruit"
        },
        {
            "img": "img/lambic2.png",
            "name": "Lindemans (lambic)",
            "color": "white",
            "alcohol": "medium",
            "gall": "weak",
            "taste": "fruit",
            "taste2": "sour"
        },
    ]

    vm.colors = color;
    vm.alcohols = alcohol;
    vm.galls = gall;
    vm.tastes = taste;

    function findBeer() {

        var searchParams={}
        Object.keys(vm.formData).forEach(key => {
            if (vm.formData[key]) {
                searchParams[key]=vm.formData[key]
            }
        });
        console.log("parametry wyszukiwania...");
        console.log(searchParams);
        var items = $filter('filter')(beers, searchParams);
    
        if (items.length > 1) {
            var rand = Math.floor(Math.random() * items.length);
            vm.beer = items[rand];
        } else if (items.length === 1) {
            vm.beer = items[0];
        } else {
            vm.beer = {"name": "Brak wyniku...", "img": "img/kenobi.jpeg"} 
        }
        console.log("znaleziono...");
        console.log(vm.beer);
    }

    function isBeer() {
        return !angular.equals({}, vm.beer)
    }

}]);