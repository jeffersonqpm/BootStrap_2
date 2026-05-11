import java.util.Scanner;

public class teste{

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Nome: ");

        String nome = scan.nextLine();
        

        if(nome.equalsIgnoreCase("jefferson")){
            System.out.println("Nome: " + nome + " Está correto.");
        }else{
            System.out.println("Nome: " + nome + " Está incorreto.");
        }
    }
}