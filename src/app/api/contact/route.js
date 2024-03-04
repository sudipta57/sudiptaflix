// Import necessary modules
import dbConnect from "@/utils/dbconn";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

// Define POST request handler
export async function POST(req, res) {
  try {
    // Parse the request body
    const body = await req.json();

    // Log the parsed request body

    // Establish a database connection
    const connectDB = await dbConnect();
    console.log("db connected");
    // Log a message to indicate successful database connection

    // Check if request body and database connection are valid
    if (body && connectDB) {
      // Create a new document in the database using the Contact model
      await Contact.create(body);

      // Log a success message

      // Return a JSON response indicating success
      return NextResponse.json(
        {
          message: "Message sent successfully",
        },
        {
          status: 200,
        }
      );
    } else {
      // Log an error message if request body or database connection is invalid
      console.error("Error: Request body or database connection is invalid.");

      // Return a JSON response indicating an error
      return NextResponse.json(
        {
          error:
            "Connect to the database failed or fill the properties correctly",
        },
        {
          status: 500,
        }
      );
    }
  } catch (error) {
    // Log an error message if an exception occurs
    console.error("Server error:", error);

    // Return a JSON response indicating a server error
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
