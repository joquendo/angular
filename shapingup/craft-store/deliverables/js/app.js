(function() {

  var app = angular.module( "craftStore", [] );
  
  //Store Controller
  app.controller("StoreController", function() {
    this.products = crafts;
  });
  
  //Tab Controller
  app.controller('TabController', function() {
    this.tab = 1;
    
    this.setTab = function(selectTab) {
      this.tab = selectTab;
    };
    
    this.isSet = function(checkTab) {
     return this.tab === checkTab; 
    };
  });
  
  //Gallery Controller
  app.controller('GalleryController', function() {
    this.current = 0;
    this.setCurrent = function(selectCurrent) {
      this.current = selectCurrent || 0;
    };
  });
  
  //Review Controller
  app.controller("ReviewController", function() {
    this.review = {};
    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    }
  });
  
  var crafts = [
    {
      name: "Dolly alpha block",
      description: "Alpha blocks are a great way to entertain and educate your children.",
      price: 2,
      images: [
        {
          full: "images/christmas_blocks.jpg",
          thumb: "images/christmas_blocks_thumb.jpg"

        },
        {
          full: "images/classic_block.jpg",
          thumb: "images/classic_block_thumb.jpg"
        },
        {
          full: "images/big_blocks.jpg",
          thumb: "images/big_blocks_thumb.jpg"
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "I love these blocks!",
          author: "joe@example.org",
          createdOn: 1397490980837
        },
        {
          stars: 3,
          body: "Cute festive way to decorate the house and the children love them.",
          author: "tim@example.org",
          createdOn: 1397490980837
        }
      ],
      canPurchase: false,
      soldOut: false
    },
    {
      name: "Holiday Wreaths",
      description: "Decorate your home with these neat wreaths for the holidays.",
      price: 22.95,
      images: [
        {
          full: "images/wreath_1.jpg",
          thumb: "images/wreath_1_thumb.jpg"
        },
        {
          full: "images/wreath_2.jpg",
          thumb: "images/wreath_2_thumb.jpg"
        },
        {
          full: "images/wreath_3.jpg",
          thumb: "images/wreath_3_thumb.jpg"
        }
      ],
      reviews: [
        {
          stars: 3,
          body: "Beautiful festive wreaths. I'm so glad I went with these holiday wreath.",
          author: "JimmyDean@example.org",
          createdOn: 1397490980837
        },
        {
          stars: 4,
          body: "It's beginning to look a lot like christmas.",
          author: "gemsRock@example.org",
          createdOn: 1397490980837
        }
      ],
      canPurchase: true,
      soldOut: false
    },
    {
      name: "Christmas Ornaments",
      description: "Hang an ornament or set a elegant display.",
      price: 2,
      images: [
        {
          full: "images/ornament_1.jpg",
          thumb: "images/ornament_1_thumb.jpg"
        },
        {
          full: "images/ornament_2.jpg",
          thumb: "images/ornament_2_thumb.jpg"
        },
        {
          full: "images/ornament_3.jpg",
          thumb: "images/ornament_3_thumb.jpg"
        }
      ],
      reviews: [
        {
          stars: 3,
          body: "Beatiful religious ornaments.",
          author: "dasher@example.org",
          createdOn: 1397490980837
        },
        {
          stars: 5,
          body: "My fav!",
          author: "LouisW407@example.org",
          createdOn: 1397490980837
        },
        {
          stars: 4,
          body: "Love them!",
          author: "nat@example.org",
          createdOn: 1397490980837
        }
      ],
      canPurchase: true,
      soldOut: false
    }
    ]

})();