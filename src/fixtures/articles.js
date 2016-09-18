import { ARTICLE, VIDEO, LIVE } from '../constants/ArticleTypes';

export default {
  "articles": {
    1: {
      "id": 1,
      "title": "Big article",
      "width": 544,
      "height": 448,
      "fontSize": 20,
      "type": ARTICLE
    },
    2: {
      "id": 2,
      "title": "Small top",
      "width": 416,
      "height": 224,
      "fontSize": 20,
      "type": ARTICLE
    },
    3: {
      "id": 3,
      "title": "Small bottom",
      "width": 416,
      "height": 224,
      "fontSize": 20,
      "type": ARTICLE
    },
    4: {
      "id": 4,
      "title": "Test article 1",
      "width": 336,
      "height": 224,
      "fontSize": 20,
      "type": VIDEO
    },
    5: {
      "id": 5,
      "title": "Test article 2",
      "width": 352,
      "height": 224,
      "fontSize": 20,
      "type": LIVE
    },
    6: {
      "id": 6,
      "title": "Test article 3",
      "width": 272,
      "height": 224,
      "fontSize": 20,
      "type": ARTICLE
    },
    7: {
      "id": 7,
      "title": "Big article",
      "width": 544,
      "height": 448,
      "fontSize": 20,
      "type": ARTICLE
    },
    8: {
      "id": 8,
      "title": "Small top",
      "width": 416,
      "height": 224,
      "fontSize": 20,
      "type": ARTICLE
    },
    9: {
      "id": 9,
      "title": "Small bottom",
      "width": 416,
      "height": 224,
      "fontSize": 20,
      "type": ARTICLE
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
