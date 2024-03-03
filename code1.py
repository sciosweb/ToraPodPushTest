# 두 수를 더하는 함수
def add_numbers(a, b):
    return a + b

# 사용자 입력 받기
num1 = float(input("첫 번째 숫자를 입력하세요: "))
num2 = float(input("두 번째 숫자를 입력하세요: "))

# 결과 출력
result = add_numbers(num1, num2)
print(f"{num1} + {num2} = {result}")
