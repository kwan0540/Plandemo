# Plandemo
I have used redux for state management in this react app. For the component, there are three main parts.
For the input Json format. I chose to use text area to collect the text from the user. The data should be input as follow  {"planName":"{string}", "General":{boolean}, "Physiotherapy":{boolean}, "cost": {integer}}. ex.
{"planName":"Standard Plan", "General":true, "Physiotherapy":false, "cost": 300}. 
Once the user finished the text in json format and press the submit button, the data will be collected by useRef hooks to json.parse. Also, i have used try and catch to catch ther error if the text is not in Json format.
In addition, I used the useSelector from redux to compare the previous input data and the latest so that it will be alerted if it is a duplicated data. Moreover, I set the limit
to 3 items that the user can input. After the data passed to the store in redux from JsonForma.js, another components can read the data and display on the Plan.js to show all the valid input from the user.
