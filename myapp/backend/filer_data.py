
def classify_weight(patient_info):
    weight = patient_info["wight(kg)"]
    height = patient_info["height(cm)"]

    height_m = height / 100.0
    bmi = weight / (height_m ** 2)
    if bmi < 18.5:
        return "Underweight"
    elif 18.5 <= bmi < 29.9:
        return "Normal Weight"
    else:
        return "Overweight"


if __name__ == "__main__":
    print(classify_weight())
