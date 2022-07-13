module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Meat Type',
    publicApiProjection: {
      title: 1,
      _url: 1,
    },

  },
  fields: {
    add: {
      price: {
        type: 'float',
        label: 'Price',
        required: true
      },
      description: {
        type: 'string',
        label: 'Description',
        textarea: true,
        required: true
      },
      icon: {
        type: 'area',
        label: 'Representative-Image',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {}
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title','price']
      }
    }
  }
};