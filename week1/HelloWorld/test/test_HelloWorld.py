import pytest
from lib.HelloWorld import helloWorld

class test_helloWorld:
    def test_helloWord(self):
        hello = helloWorld("Aaron")
        assert hello == 'Hello Aaron'