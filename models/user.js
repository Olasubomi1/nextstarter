import { Schema, model, models } from "mongoose";

const UserSchema = newSchema({
  email: {
    type: String,
    unique: [true, "Email already exist!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;

/**
 * The model obj is provided by mongoose library and stores all the registered models
 * If a model named user alreadey exist in the "models" obj, it assign that existing model to the User variable
 * This prevents redefining the model and ensures that the existing model is reused.
 *
 * If a model named user does not exist in the "models" obj, the model function from Mongoose is called to create a new one
 * The newly created model is the assigned to the "User variable."
 */
