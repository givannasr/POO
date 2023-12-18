namespace ConsoleAppCSharp
{
    public class ContaCorrente : Conta
    {
        public override string Rendimentojuros()
        {
            return "Está conta corrente não possui rendimento de juros.";
        }
    }
}