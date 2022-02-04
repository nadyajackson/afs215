import pytest
# from lib.helloWorld import helloWorld
def helloWorld(name: str) -> str:
    return f'Hello World my name is {name}'

#class test_helloWorld:
def test_helloWorld():
    print('test')
    hello = helloWorld("Aaron")
    print(hello)
    assert hello == 'Hello Aaron'

test_helloWorld()

