class Empty:
    def __init__(self):
        self.listhere = []
    
    def append(self, newdata):
        self.listhere.append(newdata)
    
    def totuple(self, list2):
        return tuple(list2)


here = Empty()

print(here.listhere)
#string
here.append('smile')
here.append('bunny')
here.append('cat')
#number
here.append(48)
#dictionary
here.append({'happy':'smile'})
#tuple
here.append(('happy', 'sad', 'angry', 'mad'))

print(here.listhere)
print(type(here.listhere))
totuple = here.totuple(here.listhere)
print(totuple)
print(type(totuple))