def reverse_string(s):
    reversed_str = " "
    for char in s:
        reversed_str = char + reversed_str  
    return reversed_str
text = input("Enter a string: ")
print("Reversed string:", reverse_string(text))