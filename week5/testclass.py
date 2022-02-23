import pytest
class Week:
    def __init__(self):
        self.newList = []
        self.count = 0

    def addtolist(self, item):
        self.newList.append(item)
        self.count += 1
        return self.newList

    def search(self, item):
        i=0
        while(i < self.count):
            if (self.newList[i] == item):
                return ("Found at index" , i)
            else:
                i += 1
        return "Item not Found"

# var1 = Week()
# print(var1.newList)
# var1.addToList('smile')
# print(var1.newList)
# var1.addToList('yellow')
# var1.addToList('smile')
# var1.addToList('smile')
# print(var1.newList)
# print(var1.search('yellow'))


@pytest.fixture
def start():
    testing = Week()
    return testing


@pytest.fixture
def startinglist(start):
    start.addtolist('smile')
    start.addtolist('smile')
    start.addtolist('yellow')
    start.addtolist('smile')
    return start


def testadd(start):
    assert start.addtolist('smile') == ["smile"]
    assert start.addtolist('smile') == ["smile", "smile"]
    assert start.addtolist('yellow') == ["smile", "smile", "yellow"]
    assert start.addtolist('smile') == ["smile", "smile", "yellow", "smile"]


def testsearch(startinglist):
    assert startinglist.search('yellow') == ("Found at index", 2)
