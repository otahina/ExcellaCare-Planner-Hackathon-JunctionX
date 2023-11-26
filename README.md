![Header Image](./banner.png)

## 🏥 ExcellaCare can both save patients and doctors. 🧑‍⚕️🙆‍♀️✨

Reduce the amount of stress on doctors, save more patients' lives,
and increase the quality of care with ExcellaCare.

## Demo Highlights 🎬



https://github.com/otahina/ExcellaCare-Planner-Hackathon-Challenge/assets/108225969/0ebb0e9b-5a21-48c7-90c4-9e61aff8712d



## Frontend UI Features 🎨
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

**All you need is button clicks! ☑️**

* Time Table for each machine, doctors can see appointments at a glance. 👀
* Recommended date and time are shown, just need to click and choose! Confirm and all done!
* Emergency handling: Remove patient and make a space manually.

### Technical Details 🧰

<details>
<summary>
    <b>Open Sesame 🪄</b>
</summary>
For simplicity, we made few assumptions:

- timetable only shows 5 days. 
- Treatment should be done every day constantly except for emergency case.

</details>

## Backend Features 🤖
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)


**The power of prompt engineering ⚙️**

* Used **GPT 3.5 turbo** to process the data and show available time slots.

### Technical Details 🧰

<details>
<summary>
    <b>Open Sesame 🪄</b>
</summary>

### Prompt Example

```python
data_to_be_known = ("TrueBeam, VitalBeam, Unique are the machine names for radiotherapy. Overweight patient can't "
                        "use VitalBeam. Underweight patient should prioritize VitalBeam. If the treatment has to be "
                        "done today, and there is no available date and time today, then return only machine name "
                        "which should be used.")

patient_condition = (f" Patient is {weight_type}, who has {cancer_type} cancer at {cancer_stage}. "
                         f"The treatment time per session is {treatment_session_time}.")

available_time_and_date_data = (f" Here is the available date and time for each machine: "
                                    f"{available_time_and_date_for_each_machine}")

instructions = (f"/Calendar_data finished/ Please find the 5 continuous days the machine can be used in the range, "
                    f"{the_range_of_date_the_patient_should_start}. Based on the condition, {machine_priority}, return "
                    f"the best machine to be used, and as many available time as possible per date. Make available date"
                    f"for all machines which can be used. The date should be continuous "
                    f"5 days, and each day, the treatment starting time can be +/-2 hours.")
                    
summary = data_to_be_known + patient_condition + available_time_and_date_data + instructions
```
Finally, summary is fed into GPT 3.5 turbo to generate the available time slots.

### GPT response Example
```bach
Based on the condition given, the available machines for the treatment are VitalBeam and TrueBeam. Here are the available dates and times for each machine, with a window of +/- 2 hours for the treatment starting time:

VitalBeam:
2023-11-01: 11:00-11:15, 12:00-12:15, 13:30-13:45
2023-11-02: 11:00-11:15, 12:00-12:15, 12:30-12:45
2023-11-03: 10:00-10:15, 15:30-15:45
2023-11-04: 9:00-9:15, 9:30-9:45, 10:00-10:15
2023-11-05: 9:00-9:15, 11:00-11:15, 12:30-12:45

TrueBeam:
2023-11-01: 12:30-12:45, 13:30-13:45, 16:00-16:15
2023-11-02: 14:30-14:45, 13:30-13:45, 14:00-14:15
2023-11-03: 14:00-14:15, 11:00-11:15, 15:00-15:15
2023-11-04: 12:00-12:15, 12:30-12:45, 16:30-16:45, 16:00-16:15
2023-11-05: 13:00-13:15, 9:00-9:15, 15:30-15:45, 14:00-14:15
```
That is how we can retrieve the available time slots for each machine, and
pass it to the frontend.

</details>

## Next Steps 🏃‍♀️

It is better if the system can also recommend which patient should be postponed or cancelled.

## Team Members 👩‍💻👨‍💻

Hina Ota
- [LinkedIn](https://www.linkedin.com/in/hina-ota/)

Zoltán Singlár
- [Email](mailto:singlarzoli@gmail.com)
