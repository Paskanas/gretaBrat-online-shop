<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Mail\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

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
            $name = $request->name;
            $surname = $request->surname;
            $email = $request->email;
            $message = $request->message;
            if (App::environment('production')) {
                Mail::to('info.gretabrat@gmail.com')->send(new Contact($name, $surname, $email, $message));
            } else {
                Mail::to('paskanass@gmail.com')->send(new Contact($name, $surname, $email, $message));
            }

            return response()->json([
                'status' => 200,
            ]);
        }
    }
}
