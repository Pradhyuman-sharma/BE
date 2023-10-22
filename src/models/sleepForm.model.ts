import  mongoose, { Date, Schema, model } from "mongoose";

interface ISleepDetails {
  userId: mongoose.Types.ObjectId;
  bedTime: string; // can be taken as date and then extract time ..also we only need the time so from frontEnd date.toLocaleTimeString();
  wakeUpTime: string; // same as above
  sleepingWellChanges:Array<string>;
  strugglingInSleep:{
    weeks:{
    from:number;
    to:number;
    }
  }
  sleepDuration:number;
  formStep:number; //to switch between screen or to make sure on which screen are we


}

const SleepFormSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Users",
    },
    bedTime:String,
    wakeUpTime:String,
    sleepingWellChanges:Array<String>,
    strugglingInSleep:{
      weeks:{
        from:Number,
        to:Number,
      }
    },
    
  sleepDuration:{type:Number,min:0,max:24},
  formStep:{type:Number,min:0,max:6}

  },
  { timestamps: true }
);

const SleepForm = model<ISleepDetails>("SleepForum", SleepFormSchema);
export default SleepForm;