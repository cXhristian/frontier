import { ARTICLE, VIDEO, LIVE } from '../constants/ArticleTypes';

export default {
  "articles": {
    1: {
      "id": 1,
      "title": "Big article",
      "width": 544,
      "height": 448,
      "fontSize": 20,
      "type": ARTICLE,
      "imageWidth": 512,
      "imageHeight": 409.6,
      "imageOffsetX": 0,
      "imageOffsetY": -10.943569428317836
    },
    2: {
      "id": 2,
      "title": "Small top",
      "width": 416,
      "height": 224,
      "fontSize": 20,
      "type": ARTICLE,
      "imageWidth": 2582.8343156313954,
      "imageHeight": 2066.267452505116,
      "imageOffsetX": -772.7543801019581,
      "imageOffsetY": -964.1752830103474,
      "fontSize": 20
    },
    3: {
      "id": 3,
      "title": "Small bottom",
      "width": 416,
      "height": 224,
      "fontSize": 20,
      "type": ARTICLE,
      "imageWidth": 464.64000000000044,
      "imageHeight": 371.7120000000004,
      "imageOffsetX": -55.18587152516922,
      "imageOffsetY": -118.10198657024807
    },
    4: {
      "id": 4,
      "title": "Test article 1",
      "width": 336,
      "height": 224,
      "fontSize": 20,
      "type": VIDEO,
      "imageWidth": 788.4977078704007,
      "imageHeight": 630.7981662963207,
      "imageOffsetX": -240.27425343705022,
      "imageOffsetY": 0
    },
    5: {
      "id": 5,
      "title": "Test article 2",
      "width": 352,
      "height": 224,
      "fontSize": 20,
      "type": LIVE,
      "imageWidth": 425.92000000000024,
      "imageHeight": 340.7360000000002,
      "imageOffsetX": -55.031053719008355,
      "imageOffsetY": -79.1844922520662
    },
    6: {
      "id": 6,
      "title": "Test article 3",
      "width": 272,
      "height": 224,
      "fontSize": 20,
      "type": ARTICLE,
      "imageWidth": 753.2228104130405,
      "imageHeight": 602.5782483304324,
      "imageOffsetX": -513.2228104130405,
      "imageOffsetY": 0
    },
    7: {
      "id": 7,
      "title": "Big article",
      "width": 544,
      "height": 448,
      "fontSize": 20,
      "type": ARTICLE,
      "imageWidth": 997.7431552000007,
      "imageHeight": 798.1945241600006,
      "imageOffsetX": -485.74315520000073,
      "imageOffsetY": -411.46974478500044
    },
    8: {
      "id": 8,
      "title": "Small top",
      "width": 416,
      "height": 224,
      "fontSize": 20,
      "type": ARTICLE,
      "imageWidth": 384,
      "imageHeight": 307.2,
      "imageOffsetX": 0,
      "imageOffsetY": -112.19999999999999
    },
    9: {
      "id": 9,
      "title": "Small bottom",
      "width": 416,
      "height": 224,
      "fontSize": 20,
      "type": ARTICLE
    },
    10: {
      "id": 10,
      "title": "Unused article",
      "width": 416,
      "height": 224,
      "fontSize": 20,
      "type": ARTICLE
    },
    11: {
      "id": 10,
      "title": "Unused live thing",
      "width": 416,
      "height": 224,
      "fontSize": 20,
      "type": LIVE
    },
    12: {
      "id": 10,
      "title": "Unused video",
      "width": 416,
      "height": 224,
      "fontSize": 20,
      "type": VIDEO,
      "imageWidth": 680.2794240000004,
      "imageHeight": 544.2235392000003,
      "imageOffsetX": -99.55024050000026,
      "imageOffsetY": -66.33323928750013
    }
  },
  "groupOrder": [1, 2, 3],
  "articleGroups": {
    1: {
      "id": 1,
      "articles": [1, 2, 3],
      "align": "left"
    },
    2: {
      "id": 2,
      "articles": [4, 5, 6],
      "align": "left"
    },
    3: {
      "id": 3,
      "articles": [7, 8, 9],
      "align": "right"
    },
  }
};
