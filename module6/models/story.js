const { DateTime } = require('luxon');
const {v4: uuidv4} = require('uuid');
const stories = [
    {
        id: '1',
        title: 'My Life at Charlotte',
        content: "My time at Charlotte has been nothing short of unspactacular. I love the community I've been able to be a part of here. I've learned so much, this place is truly my second home",
        author: 'Andrew',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '2',
        title: 'Learning NBAD',
        content: 'The best kind of chocolate is the kind that is edible. The mitochondria is the power house of a cell. McDonalds is the best!',
        author: 'Andrew',
        createdAt: DateTime.local(2021, 2, 12, 18, 0).toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '3',
        title: 'My Spring Break',
        content: "You wll notice that on Thursday afternoon from 3:30 to 6:30 we will be going to thePark. This is an opportunity to spend a little time away from the retreat center. Pier Park is aboard walk where you can do some shopping and exploring if you would like. While at Pier Park everyone will get dinner (This is one of the few meals that you are responsible for, it is not covered by the cost of the trip like most other meals are. The only other times that this is the case is any meals we eat on the bus ride down to Florida and the bus ride back).",
        author: 'Andrew',
        createdAt: DateTime.local(2021, 2, 12, 18, 0).toLocaleString(DateTime.DATETIME_SHORT)
    }
];

//Function to get a list of stories
exports.find = () => {
    return stories;
}

exports.findById = id => stories.find(story => story.id === id);

exports.save = function(story) {
    story.id = uuidv4();
    story.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    stories.push(story);
}

exports.updateById = function(id, newStory) {
    let story = stories.find(story => story.id === id);
    if(story) {
    story.title = newStory.title;
    story.content = newStory.content;
    return true;
    } else {
        return false;
    }
}

exports.deleteById = function(id) {
    let index = stories.findIndex(story => story.id === id)
    if(index !== -1) {
        stories.splice(index, 1)
        return true
    } else {
        return false;
    }
}

