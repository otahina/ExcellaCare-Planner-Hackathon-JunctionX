PATIENT_INFO = {
    "cancer_type": "Craniospinal",
    "cancer_stage": "stage 2",
    "the range of date the patient should start": "2023-11-01 to 2023-11-10",
}
211
# Usually it is fetched from database, for simplicity, we use this dictionary
CALENDAR_DATA = {
    'TrueBeam': {
        '2023-11-01': ['12:30-12:45', '13:30-13:45', '16:00-16:15'],
        '2023-11-02': ['14:30-14:45', '13:30-13:45', '14:00-14:15', '9:00-9:15'],
        '2023-11-03': ['14:00-14:15', '11:00-11:15', '15:00-15:15'],
        '2023-11-04': ['12:00-12:15', '12:30-12:45', '10:30-10:45', '16:30-16:45', '16:00-16:15'],
        '2023-11-05': ['13:00-13:15', '9:00-9:15', '15:30-15:45', '14:00-14:15'],
        # '2023-11-06': ['13:00-13:15', '10:30-10:45', '9:30-9:45', '16:00-16:15', '16:30-16:45'],
        # '2023-11-07': ['10:00-10:15', '12:00-12:15', '15:00-15:15', '13:30-13:45'],
        # '2023-11-08': ['13:30-13:45', '14:30-14:45', '12:30-12:45', '9:30-9:45'],
        # '2023-11-09': ['13:30-13:45', '10:00-10:15', '16:00-16:15', '11:30-11:45'],
        # '2023-11-10': ['13:30-13:45', '14:30-14:45', '10:30-10:45', '12:00-12:15', '16:00-16:15']
    },
    'VitalBeam': {
        '2023-11-01': ['9:00-9:15', '12:00-12:15', '11:00-11:15', '13:30-13:45', '15:30-15:45'],
        '2023-11-02': ['12:30-12:45', '12:00-12:15', '11:00-11:15'],
        '2023-11-03': ['16:30-16:45', '15:30-15:45', '10:00-10:15'],
        '2023-11-04': ['9:30-9:45', '9:00-9:15', '10:00-10:15'],
        '2023-11-05': ['12:30-12:45', '15:00-15:15', '9:00-9:15', '11:00-11:15', '14:00-14:15'],
        # '2023-11-06': ['16:30-16:45', '11:30-11:45', '12:00-12:15'],
        # '2023-11-07': ['12:30-12:45', '13:00-13:15', '10:30-10:45'],
        # '2023-11-08': ['9:30-9:45', '12:00-12:15', '15:00-15:15', '16:30-16:45'],
        # '2023-11-09': ['15:00-15:15', '16:00-16:15', '13:30-13:45', '9:30-9:45'],
        # '2023-11-10': ['14:00-14:15', '14:30-14:45', '10:00-10:15']
    },
    'Unique': {
        '2023-11-01': ['9:00-9:15', '16:30-16:45', '12:30-12:45', '12:00-12:15'],
        '2023-11-02': ['16:30-16:45', '10:00-10:15', '15:00-15:15', '11:30-11:45', '14:00-14:15'],
        '2023-11-03': ['9:00-9:15', '13:30-13:45', '10:30-10:45'],
        '2023-11-04': ['16:00-16:15', '13:00-13:15', '14:00-14:15'],
        '2023-11-05': ['13:00-13:15', '14:30-14:45', '11:00-11:15'],
        # '2023-11-06': ['13:30-13:45', '9:30-9:45', '16:00-16:15', '12:00-12:15', '10:30-10:45'],
        # '2023-11-07': ['13:00-13:15', '13:30-13:45', '15:30-15:45', '10:30-10:45', '14:00-14:15'],
        # '2023-11-08': ['16:00-16:15', '12:30-12:45', '11:00-11:15'],
        # '2023-11-09': ['16:00-16:15', '16:30-16:45', '10:30-10:45', '15:30-15:45', '14:30-14:45'],
        # '2023-11-10': ['14:30-14:45', '12:30-12:45', '15:30-15:45', '9:30-9:45', '11:00-11:15']
    }
}


def summarize_prompt(weight_type):
    # Treatment session time dictionary based on cancer type
    treatment_session_time_based_on_cancer_type = {
        "Craniospinal": 30,
        # avg. 12 min, but for simplicity, we use 15 min
        "Breast": 15,
        "Breast Special": 20,
        "Head and neck": 15,
        "Abdomen": 15,
        "Pelvis": 15,
        "Crane": 10,
        "Lung": 15,
        "Lung Special": 15,
        "Whole Brain": 10
    }

    # Machine priority dictionary based on cancer type
    machine_priority_based_on_cancer_type = {
        "Craniospinal": "Only TrueBeam can be used.",
        # fraction time is relatively short, so we can prioritize Unique
        "Breast": "Unique is prioritized than VitalBeam.",
        "Breast Special": "Only TrueBeam can be used.",
        # Moderate time, so VitalBeam can be slightly prioritized
        "Head and neck": "VitalBeam can be slightly prioritized than TrueBeam Unique can't be used.",
        "Abdomen": "VitalBeam can be slightly prioritized than TrueBeam Unique can't be used.",
        # fraction time is short, so we can prioritize VitalBeam
        "Pelvis": "Vital Beam is prioritized than TrueBeam. Unique can't be used.",
        "Crane": "VitalBeam can be slightly prioritized than TrueBeam Unique can't be used.",
        "Lung": "VitalBeam can be slightly prioritized than TrueBeam Unique can't be used.",
        "Lung Special": "TrueBeam is prioritized than VitalBeam. Unique can't be used.",
        "Whole Brain": "Unique is prioritized than VitalBeam. TrueBeam can't be used."
    }

    cancer_type = PATIENT_INFO["cancer_type"]
    cancer_stage = PATIENT_INFO["cancer_stage"]
    the_range_of_date_the_patient_should_start = PATIENT_INFO["the range of date the patient should start"]

    treatment_session_time = str(treatment_session_time_based_on_cancer_type[cancer_type]) + " minutes"
    machine_priority = machine_priority_based_on_cancer_type[cancer_type]

    available_time_and_date_for_each_machine = CALENDAR_DATA

    data_to_be_known = ("TrueBeam, VitalBeam, Unique are the machine names for radiotherapy. Overweight patient can't "
                        "use VitalBeam. Underweight patient should prioritize VitalBeam. If the treatment has to be "
                        "done today, and there is no available date and time today, then return only machine name "
                        "which should be used. Herel is the available date and time for each machine.")

    patient_condition = (f" Patient is {weight_type}, who has {cancer_type} cancer at {cancer_stage}. "
                         f"The treatment time per session is {treatment_session_time}.")

    available_time_and_date_data = (f"here is the available date and time for each machine: "
                                    f"{available_time_and_date_for_each_machine}")

    instructions = (f"/Calendar_data finished/ Please find the 5 continuous days the machine can be used in the range, "
                    f"{the_range_of_date_the_patient_should_start}. Based on the condition, {machine_priority}, return "
                    f"the best machine to be used, and as many available time as possible per date.")

    summary = data_to_be_known + patient_condition + available_time_and_date_data + instructions

    return summary

# Test
if __name__ == "__main__":
    user_message = summarize_prompt("normal weight")
    print(user_message)


