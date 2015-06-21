(function() {
  var app = angular.module('store', ['store-products']);

  app.controller('StoreController', ['$log', function($log) {
    this.products = gems;
    $log.info('Dependency Info');
  }]);

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [
    {
      name: 'No1',
      price: 105.000,
      description: 'This is a painting of Jean-Michel Basquiat.',
      images: [
        {
          full: 'basquiat1.jpg'
        }
      ],
      canPurchase: true,
      soldOut: false,
      reviews: [
        {
          stars: 5,
          body: 'I love this picture!',
          author: 'teglanna@gmail.com'
        }
      ]
    },
    {
      name: 'No2',
      price: 200.000,
      description: 'Pentagonal Gem description...',
      images: [
        {
          full: 'basquiat2.jpg'
        }
      ],
      canPurchase: true,
      soldOut: false,
      reviews: [
        {
          stars: 5,
          body: 'This is my favorite painting!',
          author: 'user@gmail.com'
        },
      ]
    }
  ];
})();