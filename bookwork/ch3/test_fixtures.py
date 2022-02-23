import pytest 

@pytest.fixture()
def some_data():
    """Return ultimate question"""
    return 42

def test_some_data(some_data):
    """use fixture to return data"""
    assert some_data == 42