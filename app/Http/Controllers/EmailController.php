<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Contact;
use Validator;

class EmailController extends Controller
{



    public function sendEmail(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' => ['required', 'min:3', 'max:64'],
                'message' => ['required', 'min:3', 'max:64'],
                'email' => ['required', 'email:rfc,dns', 'min:3', 'max:64'],
            ],
            // [
            //     'author_surname.min' => 'mano zinute'
            // ]
        );
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ]);
        } else {
            return response()->json([
                'status' => 200
            ]);
        };
        dump($validator->messages());
        return 'labas';

        $name = $request->name;
        $surname = $request->surname;
        $email = $request->email;
        $messages = $request->message;
        Mail::to('paskanass@gmail.com')->send(new Contact($name, $surname, $email, $messages));
    }
}